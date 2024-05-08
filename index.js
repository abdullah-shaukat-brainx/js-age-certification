const day = document.getElementById("day");
const age = document.getElementById("month");
const email = document.getElementById("year");
const myButton = document.getElementById("myButton");
const form = document.getElementById("form");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};


let dayFlag=false;
let monthFlag=false;
let yearFlag=false;

function validateDay(day) {
    const dayValue = day.value.trim();
    if (dayValue >= 1 && dayValue <= 31) {
      setSuccess(day);
      return true;
    } else setError(day, "Valid range is 1-31");
    return false;
}

function validateMonth(month) {
    const monthValue = month.value.trim();
    if (monthValue >= 1 && monthValue <= 12) {
      setSuccess(month);
      return true;
    } else setError(month, "Valid range is 1-12");
    return false;
}

function validateYear(year) {
    const yearValue = year.value.trim();
    if (yearValue >= 1800 && yearValue <= 2024) {
      setSuccess(year);
      return true;
    } else setError(year, "Valid range is 1800-2024");
    return false;
}

day.addEventListener("input", () => {
    dayFlag = validateDay(day);
});
  
month.addEventListener("input", () => {
    monthFlag = validateMonth(month);
});

year.addEventListener("input", () => {
    yearFlag = validateYear(year);
});


const calculateAge = () =>
{
    const dayValue = day.value.trim();
    const monthValue = month.value.trim();
    const yearValue = year.value.trim();
    
    let DOB = new Date();
    console.log("Year: ",yearValue, " ","Month: ",monthValue, " ","Day: ",dayValue, "  !");

    DOB.setFullYear(yearValue, monthValue-1, dayValue);
    console.log("Date of Birth: ", DOB);

    let  month_diff = Date.now() - DOB.getTime();
    console.log(month_diff);

    let age_dt = new Date(month_diff);
    console.log(age_dt);

    let year_dt = age_dt.getUTCFullYear();
    console.log(year_dt);

    let age = Math.abs(year_dt - 1970);
    console.log(age);
    return age;
}


form.addEventListener('submit', e => {
    e.preventDefault();

    dayFlag = validateDay(day);
    monthFlag = validateMonth(month);
    yearFlag = validateYear(year);


    if(dayFlag===false || monthFlag===false || yearFlag===false)
    {
      alert("Cant proceed until all inputs are valid!")
    }
    else if(calculateAge()<15)
    {
      alert("Age is less than 15!");
      console.log("Age: ",calculateAge());
    }
    else if(calculateAge()>=15)
    {
      window.location.assign("https://www.google.com/");
    }
});