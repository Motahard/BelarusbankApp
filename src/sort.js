export function sortCourses(course) {
  const courseSorted = [].slice.call(course).sort((bank1, bank2) => {
    if (bank1.USD_in < bank2.USD_in) {
      return 1;
    } else if (bank1.USD_in > bank2.USD_in) {
      return -1;
    } else {
      return 0;
    }
  });
  return courseSorted;
}

export function reverseSortCourses(course) {
  const courseSorted = [].slice.call(course).sort((bank1, bank2) => {
    if (bank1.USD_out < bank2.USD_out) {
      return -1;
    } else if (bank1.USD_out > bank2.USD_out) {
      return 1;
    } else {
      return 0;
    }
  });
  return courseSorted;
}
