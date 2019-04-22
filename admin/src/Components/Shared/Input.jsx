import React, { PureComponent } from "react";
import PropTypes                from "prop-types";
import { Form, Input }          from "antd";

const { Item : FormItem } = Form;
const { TextArea }        = Input;

class CustomInput extends PureComponent {
    static propTypes = {
        onChange    : PropTypes.func.isRequired,
        property    : PropTypes.string,
        className   : PropTypes.string,
        label       : PropTypes.string,
        type        : PropTypes.string,
        value       : PropTypes.string,
        placeholder : PropTypes.string,
        helper      : PropTypes.string,
        regex       : PropTypes.object,
        required    : PropTypes.bool,
        valid       : PropTypes.bool,
        isLoading   : PropTypes.bool,
        isTextarea  : PropTypes.bool
    };

    static defaultProps = {
        className   : "",
        type        : "text",
        property    : "",
        label       : "",
        helper      : "",
        valid       : true,
        required    : false,
        isLoading   : false,
        placeholder : "",
        isTextarea  : false
    };

    state = { firstTime : true };

    inputRef = React.createRef();

    validate(val) {
        if (this.props.regex) return this.props.regex.test(val);
        if (this.props.required) return !!val.length;
        return true;
    }

    onBlur = (evt) => {
        if (this.state.firstTime) {
            this.setState({ firstTime : false });
            this.props.onChange(evt, this.props.property, this.validate(this.props.value));
        }
    };

    onChange = (evt) => {
        this.props.onChange(evt, this.props.property, this.validate(evt.target.value));
    };

    render() {
        const {
            className,
            type,
            value,
            property,
            label,
            valid,
            isLoading,
            helper,
            placeholder,
            isTextarea
        } = this.props;

        const isInvalid = !valid && !this.state.firstTime && !isLoading;

        const props = {
            type        : type,
            placeholder : placeholder,
            id          : property,
            value       : value,
            onChange    : this.onChange,
            onBlur      : this.onBlur
        };

        return (
            <FormItem
                label={ label }
                validateStatus={ isInvalid ? "error" : isLoading ? "validating" : "success" }
                help={ helper }
            >
                { isTextarea ? <TextArea { ...props } /> : <Input { ...props } /> }
            </FormItem>
        );
    }
}

export default CustomInput;