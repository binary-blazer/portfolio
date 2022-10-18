import { memo, useCallback, useEffect, useState } from "react";

function Input(props) {
    const { className, startsWith, wrapper, rows, wrapperClass, onChange: onChangeCustom, value: IValue, type, ...rest } = props;
    let [value, setValue] = useState("");
    let [focused, setFocused] = useState(false);
    let [ IType, setType ] = useState(type);

    useEffect(() => {
        setValue(IValue);
    }, [IValue]);

    const Component = wrapper || "input";

    return <div className={`relative flex ${wrapper === "textarea" ? "items-start" : "items-center"} dark:text-white rounded-lg bg-gray-400/10 dark:bg-gray-500/5 dark:hover:bg-gray-500/10 hover:bg-gray-400/20 outline-none border-2 border-white/0 block w-full transition-all duration-200 ease-in-out sm:text-sm sm:leading-5 ${focused && 'bg-gray-400/20 border-primary/100'} ${className}`}>
        {startsWith && <div className={`flex items-center justify-center h-full pl-4 ${wrapper === "textarea" && 'pt-3.5'}`}>
            {startsWith}
        </div>}
        <Component
            {...rest}
            type={(type !== "password" ? type : IType)}
            className={`${type === "password" && 'pr-14'} py-3 px-5 w-full h-full !outline-none focus:ring-0 bg-transparent !border-none focus:outline-none focus:border-none ${wrapperClass}`}
            rows={rows || 4}
            onChange={useCallback(e => {
                setValue(e.target.value);
                onChangeCustom && onChangeCustom(e);
            }, [onChangeCustom])}
            value={value}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            autoComplete="off"
        />
        {type === "password" && (
            <div onClick={() => setType(IType === "password" ? "text" : "password")} className="absolute right-0 top-0 h-full">
                <div className="border border-gray-500/5 hover:border-gray-500/20 active:border-gray-500/30 transition-all duration-200 cursor-pointer rounded-r-lg h-full flex items-center justify-center px-4">
                    {IType === "password" ? (
                        <i className="fal fa-eye" />
                    ) : (
                        <i className="fal fa-eye-slash" />
                    )}
                </div>
            </div>
        )}
    </div>
}

export default memo(Input);