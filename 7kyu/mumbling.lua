-- Lua interpreter not installed, and will not be tested
-- This time no story, no theory. The examples below show you how to write function accum:

-- Examples:
-- accum("abcd") -> "A-Bb-Ccc-Dddd"
-- accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
-- accum("cwAt") -> "C-Ww-Aaa-Tttt"
-- The parameter of accum is a string which includes only letters from a..z and A..Z.


local solution = {}

function solution.accum(s)
  local result = ''
  for i=1,#s do
    local char = s:sub(i,i):lower()
    result = result .. char:upper() .. char:rep(i-1) .. (i ~= #s and '-' or '')
  end
  return result
end
  
return solution