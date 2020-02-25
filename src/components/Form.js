import React, { useState, useEffect, useReducer } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import SchemaForm from 'react-schema-form/lib/SchemaForm';
import utils from 'react-schema-form/lib/utils';
import forms from '../data/Forms';
import { history } from '../App';
import { useCookies } from 'react-cookie';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    progress: {
        margin: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
    },
});

function Form(props) {
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(null);
    const [formId, setFormId] = useState(null);
    const [schema, setSchema] = useState(null);
    const [form, setForm] = useState(null);
    const [actions, setActions] = useState(null);
    const [model, setModel] = useState({});

    const { classes } = props;
    
    const [cookies, setCookie] = useCookies(['userId']);
    const userId = cookies.userId;
    console.log(userId);

    useEffect(() => {
        console.log(props.match.params.formId);
        let formData = forms[props.match.params.formId];
        console.log(formData);
        setSchema(formData.schema);
        setForm(formData.form);
        setActions(formData.actions);
        setModel(formData.model || {userId: userId})
    }, [props.match.params.formId])

    function onModelChange(key, val) {
        //console.log(this.state.model);
        utils.selectOrSet(key, model, val);
    };

    function onButtonClick(action) {
        //console.log(action, model);
        let validationResult = utils.validateBySchema(schema, model);
        if(!validationResult.valid) {
            console.log(validationResult.error.message);
            setError({error: validationResult.error.message});
        } else {
            setFetching(true);
            console.log("history push");
            props.history.push({pathname: '/items', state: {path: action.success, accountId: model.accountId, statementId: model.statementId}});
        }
    };

    if(schema) {
        var buttons = [];
        actions.map((item, index) => {
            buttons.push(<Button variant="contained" className={classes.button} color="primary" key={index} onClick={e => onButtonClick(item)}>{item.title}</Button>)
        });
        let wait;
        if(fetching) {
            wait = <div><CircularProgress className={classes.progress} /></div>;
        } else {
            wait = <div></div>;
        }
        let title = <h2>{schema.title}</h2>
        return (
            <div>
                {wait}
                {title}
                <SchemaForm schema={schema} form={form} model={model} onModelChange={onModelChange} />
                {buttons}
            </div>
        )
    } else {
        return (<CircularProgress className={classes.progress} />);
    }
}

export default withStyles(styles)(Form);
