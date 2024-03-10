type ValidInvalid={
    capsLetterFlag:string;
    numberFlag:string;
    pwdLengthFlag:string;
    specialCharFlag:string;
}

const PWDRequisite = ({
    capsLetterFlag,
    numberFlag,
    pwdLengthFlag,
    specialCharFlag,
  }:ValidInvalid) => {
    return (
      <div>
        <p className={capsLetterFlag}>Must contain 1 Capital Letter</p>
        <p className={numberFlag}>Must contain number</p>
        <p className={pwdLengthFlag}>Must be 8 Chars long</p>
        <p className={specialCharFlag}> Must contain special character</p>
      </div>
    );
  };
  
  export default PWDRequisite;