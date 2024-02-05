import {
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React, { Fragment, useCallback, useEffect, useMemo } from "react";
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { AnyObject } from "../../models/Common";
import {
  convertToHalfWidth,
  convertToKanaFullWidth,
} from "../../utils/inputHelper";
import ButtonCommonFake from "@/components/button/ButtonCommonFake.tsx";
import { disabledEnterKey } from "../../utils/helper";
import { EMAIL } from "../../constants/validation";
import {
  CME00004,
  CME00006,
  CME00027,
} from "../../assets/locales/validateMessage";

interface IProps {
  id?: string;
  keyInput?: number | string;
  name: string;
  label?: string | JSX.Element;
  typeInput?: "input" | "select" | "textarea" | "password";
  option?: {
    value: string | number;
    name: string | JSX.Element;
    disabled?: boolean;
  }[];
  placeholder?: string;
  buttonName?: string | JSX.Element | boolean;
  actionButton?: (e: any) => void;
  className?: string;
  classNameButton?: string;
  rules?: AnyObject;
  disabled?: boolean | (() => boolean);
  variant?: "static" | "standard" | "outlined";
  labelInside?: string | JSX.Element;
  defaultValue?: string | number;
  callBackInputChanged?: (value: string) => void;
  icon?: JSX.Element | string;
  onFocus?: (e: any) => void;
  onChange?: (e: any) => void;
  onBlur?: (name: any, value: any) => void;
  isHalfWidth?: boolean;
  isKanaInput?: boolean;
  disabledActionButton?: boolean;
  isLoading?: boolean;
  isRequired?: boolean;
  rows?: number;
  useOnBlur?: boolean;
  hideErrorIfDisabled?: boolean;
  isEmail?: boolean;
  isEmailMultiple?: boolean;
  onCustomChange?: (e: any) => void;
}
const InputFake = (props: IProps) => {
  const {
    id,
    keyInput = 0,
    icon,
    name,
    rules,
    label,
    option = [],
    placeholder,
    buttonName,
    actionButton,
    typeInput = "input",
    className = "",
    classNameButton = "",
    disabled = false,
    variant = "static",
    labelInside,
    defaultValue,
    callBackInputChanged,
    onBlur,
    onChange,
    onFocus,
    isHalfWidth = false,
    isKanaInput = false,
    disabledActionButton = false,
    isLoading = false,
    isRequired = false,
    rows = 3,
    useOnBlur = true,
    hideErrorIfDisabled = true,
    isEmail = false,
    isEmailMultiple = false,
    onCustomChange,
  } = props;

  const {
    control,
    watch,
    getValues,
    setValue,
    setError,
    trigger,
    register,
    formState: { errors },
  } = useFormContext();

  const _name = useMemo(() => {
    if (/[.[]/.test(name)) {
      return name?.replace(/[[]/g, ".")?.replace(/[\]]/g, "")?.split(".");
    }
    return name;
  }, [name]);

  const inputChanged = callBackInputChanged && watch(name);
  useEffect(() => {
    callBackInputChanged && callBackInputChanged(inputChanged);
  }, [callBackInputChanged, inputChanged]);

  const onBlurInput = useCallback(
    async (e: any) => {
      let valueTrim = getValues(name)?.trim();
      if (isHalfWidth) {
        valueTrim = convertToHalfWidth(valueTrim);
      }
      if (isKanaInput) {
        valueTrim = convertToKanaFullWidth(valueTrim);
      }

      useOnBlur && setValue(name, valueTrim);
      onBlur && onBlur(name, valueTrim);
      await trigger(name);

      if (isEmail) {
        if (valueTrim && !new RegExp(EMAIL.PATTERN).test(valueTrim)) {
          setError(name, {
            type: "custom",
            message: CME00004,
          });
        }
        if (valueTrim && valueTrim.split("@")[0]?.length > 64) {
          setError(name, {
            type: "custom",
            message: CME00004,
          });
        }
        if (valueTrim && valueTrim.length > EMAIL.MAX_LENGTH) {
          setError(name, {
            type: "custom",
            message: CME00006(EMAIL.MAX_LENGTH),
          });
        }
      }

      if (isEmailMultiple) {
        if (valueTrim && !new RegExp(EMAIL.MULTIPLE).test(valueTrim)) {
          setError(name, {
            type: "custom",
            message: CME00004,
          });
        }
        if (
          valueTrim
            ?.split(",")
            ?.map((value: any) => value?.match(/[^@]+/)?.[0])
            ?.find((value: string) => value?.length > 64)
        ) {
          setError(name, {
            type: "custom",
            message: CME00004,
          });
        }
        if (valueTrim && !new RegExp(EMAIL.MAX_LENGHT_MAIL).test(valueTrim)) {
          setError(name, {
            type: "custom",
            message: CME00027(EMAIL.MAX_MULTIPLE),
          });
        }
      }
    },
    [
      name,
      isHalfWidth,
      isKanaInput,
      isEmail,
      isEmailMultiple,
      useOnBlur,
      getValues,
      setValue,
      setError,
      onBlur,
      trigger,
    ],
  );

  const onChangeInput = useCallback(
    (field: ControllerRenderProps<FieldValues, string>, name: any, e: any) => {
      field.onChange(e);
      onCustomChange && onCustomChange(name);
    },
    [onCustomChange],
  );

  const getElement = useCallback(
    (field: ControllerRenderProps<FieldValues, string>, name: string) =>
      ({
        select: (
          <Fragment>
            <input
              type="text"
              ref={field.ref}
              className="border-select"
              onChange={() => {}}
              onBlur={() => {}}
              onClick={() => {}}
              disabled
            />
            <Select
              key={keyInput}
              variant={variant}
              {...field}
              disabled={disabled as boolean}
              label={labelInside as string}
              ref={undefined}
              id={id || name}
              data-testid={id || name}
              onChange={(e) => onChangeInput(field, name, e)}
            >
              {option.map((item) => (
                <Option
                  value={`${item.value}`}
                  key={item.value}
                  disabled={item.disabled}
                >
                  {item.name}
                </Option>
              ))}
            </Select>
          </Fragment>
        ),
        input: (
          <Input
            {...field}
            {...register(name)}
            variant={variant}
            placeholder={placeholder}
            id={id || name}
            disabled={disabled as boolean}
            label={labelInside as string}
            icon={icon}
            data-testid={id || name}
            onChange={(e) =>
              disabled
                ? {}
                : onChange
                  ? onChange(e)
                  : onChangeInput(field, name, e)
            }
            onBlur={disabled ? undefined : onBlurInput}
            onFocus={disabled ? undefined : onFocus}
            onKeyDown={disabledEnterKey}
          />
        ),
        password: (
          <Input
            {...field}
            {...register(name)}
            type="password"
            variant={variant}
            placeholder={placeholder}
            id={id || name}
            disabled={disabled as boolean}
            label={labelInside as string}
            icon={icon}
            data-testid={id || name}
            onChange={(e) =>
              disabled ? {} : onChange ? onChange(e) : field.onChange(e)
            }
            onBlur={disabled ? undefined : onBlurInput}
            onFocus={disabled ? undefined : onFocus}
            onKeyDown={disabledEnterKey}
          />
        ),
        textarea: (
          <div className="textarea">
            <Textarea
              {...field}
              {...register(name)}
              rows={rows}
              variant={variant}
              disabled={disabled as boolean}
              placeholder={placeholder}
              label={labelInside as string}
              data-testid={id || name}
              id={id || name}
              onChange={(e) =>
                disabled
                  ? {}
                  : onChange
                    ? onChange(e)
                    : onChangeInput(field, name, e)
              }
              onBlur={disabled ? undefined : onBlurInput}
              onFocus={disabled ? undefined : onFocus}
            />
          </div>
        ),
      })[typeInput],
    [
      disabled,
      icon,
      id,
      keyInput,
      labelInside,
      onBlurInput,
      onChange,
      onFocus,
      option,
      placeholder,
      register,
      typeInput,
      variant,
      rows,
      onChangeInput,
    ],
  );

  const errorRender = useCallback(() => {
    if (typeof _name !== "string") {
      let newError: any = { ...errors };
      _name.forEach((element) => {
        newError = newError?.[element];
      });

      return (
        !(hideErrorIfDisabled && disabled) &&
        newError && (
          <Typography
            variant="small"
            color="red"
            data-testid={`${name}-error-message`}
            className={`error ${!label ? "!pl-0" : ""}`}
          >
            {newError?.message || ""}
          </Typography>
        )
      );
    }

    return (
      !(hideErrorIfDisabled && disabled) &&
      errors?.[name] && (
        <Typography
          variant="small"
          color="red"
          data-testid={`${name}-error-message`}
          className={`error ${!label ? "!pl-0" : ""}`}
        >
          {errors?.[name]?.message || ""}
        </Typography>
      )
    );
  }, [_name, disabled, errors, hideErrorIfDisabled, label, name]);

  return (
    <div className={`input-common mb-2 ${className}`}>
      <div className="flex">
        {label && (
          <label
            htmlFor={id || name}
            className="input-common__label flex bg-light-blue-100"
          >
            <span className="m-auto">
              {label}{" "}
              {(rules?.required?.value || isRequired) && (
                <span className="font-bold text-red-700">*</span>
              )}
            </span>
          </label>
        )}
        <div
          className={`input-common__content flex ${label ? "" : "label-none"}`}
        >
          <div
            className={`input-wrap px-2 ${
              icon && typeInput !== "select" ? "icon-active" : ""
            } ${disabled ? "disabled" : ""}`}
          >
            <Controller
              name={name}
              control={control}
              defaultValue={defaultValue}
              render={({ field }) => getElement(field, name)}
              rules={rules}
            />
          </div>
          {buttonName && (
            <ButtonCommonFake
              disabled={disabledActionButton}
              loadingSubmit={isLoading}
              className={`input-common__button ml-1 w-40 ${classNameButton}`}
              onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                actionButton && actionButton(e)
              }
            >
              {buttonName}
            </ButtonCommonFake>
          )}
        </div>
      </div>
      {icon && typeInput === "select" && (
        <div className="icon-select">{icon}</div>
      )}
      {errorRender()}
    </div>
  );
};

export default InputFake;
