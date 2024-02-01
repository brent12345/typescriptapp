enum GENDER {
    MALE,
    FEMALE,
    BULLSHITE
  }
  
  interface Initee {
    id: number;
    name: string;
    gender: GENDER;
  }

  export {GENDER, type Initee}