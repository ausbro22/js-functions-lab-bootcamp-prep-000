function happyHolidays(string) {
    return "Happy holidays!"
    }

function happyHolidaysTo(name, holiday) {
    if(name) {
      return "Happy holidays,"${name}"!";
} else if(name + holiday) {
    return "Happy "${holiday}", "${name}"!";
  }

}
