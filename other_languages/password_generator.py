original_word = "together"

new_string = ""
for x in range(len(original_word)):
  character = original_word[x]
  if character == 'o':
    new_string += '0'
  elif character == 'e':
    new_string += '3'
  else:
    new_string += character

print "The new string is", new_string
