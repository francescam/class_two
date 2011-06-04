function substitute(original_word) {
  var word_as_array = original_word.split('');
  var new_string = "";

  for (var x = 0; x < original_word.length; x++) {
    var character = word_as_array[x];
    if (character == 'a') {
      new_string += '4';
    } else if (character == 'e') {
      new_string += '3';
    } else if (character == 'i') {
      new_string += '1';
    } else if (character == 'o') {
      new_string += '0';
    } else if (character == 'u') {
      new_string += '2';
    } else {
      new_string += character;
    }
  }
  
  return new_string;
}
