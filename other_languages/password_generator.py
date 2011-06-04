original_word = "together"

x = 0
new_string = ""
while x < len(original_word):
  character = original_word[x]
  if character == 'o':
    new_string += '0'
  elif character == 'e':
    new_string += '3'
  else:
    new_string += character

  x += 1

print "The new string is", new_string
