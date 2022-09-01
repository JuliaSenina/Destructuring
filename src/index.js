export default function destruct(character) {
  const array = [];
  for (const { description = "Описание недоступно", ...rest } of character.special) {
    array.push({ description, ...rest });
  };
  return array;
}