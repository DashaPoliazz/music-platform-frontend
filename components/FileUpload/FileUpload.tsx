import { useRef } from "react";

interface Props {
  setFile: Function;
  accept: string;
  children: React.ReactNode;
}

const FileUpload: React.FC<Props> = ({ setFile, accept, children }) => {
  const fileInput = useRef() as React.MutableRefObject<HTMLInputElement>;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
  };

  return (
    <div onClick={() => fileInput.current.click()}>
      <input
        ref={fileInput}
        onChange={onChange}
        type="file"
        accept={accept}
        style={{
          display: "none",
        }}
      />
      {children}
    </div>
  );
};

export default FileUpload;
