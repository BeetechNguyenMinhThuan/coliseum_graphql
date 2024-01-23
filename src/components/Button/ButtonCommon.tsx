import { Button } from "@material-tailwind/react";
import { useCallback, useEffect, useRef, useState } from "react";
import Loading from "@/components/Loading/Loading.tsx";
import { AnyObject } from "@/models/Common.ts";

export default function ButtonCommon(props: any) {
  const { children, loadingSubmit } = props;
  const buttonRef = useRef<any>(null);

  const [newProps, setNewProps] = useState<AnyObject>();
  useEffect(() => {
    const _newProps = { ...props };
    // Self-defined props will be written below
    delete _newProps.loadingSubmit;

    setNewProps(_newProps);
  }, [props]);

  const handleClick = useCallback(() => {
    buttonRef?.current?.blur();
  }, []);

  return (
    <>
      {newProps && (
        <Button
          placeholder=""
          {...(newProps as {})}
          disabled={!!loadingSubmit || newProps?.disabled}
          ref={buttonRef}
          onClick={() => {
            newProps.onClick && newProps.onClick();
            handleClick();
          }}
        >
          {loadingSubmit ? <Loading /> : children}
        </Button>
      )}
    </>
  );
}
