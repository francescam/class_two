
# substitutions
#
# a e i o u 
# 4 3 1 0 2
#
# password we are using 'whoami'
# our goal is:          'wh04m1'

original_word = 'together'
word_as_array = original_word.split('')

x = 0
new_string = ""
while x < original_word.length
  character = word_as_array[x]
  if character == 'o'
    new_string << '0'
  elsif character == 'e'
    new_string << '3'
  else
    new_string << character
  end
  
  x = x + 1
end

puts "The new string is #{new_string}"










