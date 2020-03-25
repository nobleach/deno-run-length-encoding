export class RunLengthEncoding {
  encode(input: string | null) {
    const collector: Array<string|number> = [];
    let count: number = 0;
    if (input === '' || input === null) {
      return "0";
    }
    // We want to walk off the end of the array
    // so set i <= input.length as the "until"
    // condition
    for (let i = 0; i <= input.length; i++) {
      if (input[i - 1] === undefined
          || input[i] === input[i - 1]) {
        count++;
      } else {
        collector.push(count);
        collector.push(input[i - 1]);
        count = 1;
      }
    }

    return collector.join('');
  }
}
