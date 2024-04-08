return (minMarks)=> {
  // Checking if marks are greater than or equal to minMarks OR age is greater than minPlacementAge
  if (this.marks >= minMarks &&this.age >=minPlacementAge) {
      return true;
  } else {
      return false;
  }
}

