const generateDiceBearAvataaars = (seed) =>
  //`https://avatars.dicebear.com/api/avataaars/${seed}.svg`;
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;


const generateDiceBearBottts = (seed) =>
  //`https://avatars.dicebear.com/api/bottts/${seed}.svg`;
  `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}`;


const generateDiceBearGridy = (seed) =>
 // `https://avatars.dicebear.com/api/big-ears-neutral/${seed}.svg`;
  `https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=${seed}`;

export const generateAvatar = () => {
  const data = [];

  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearAvataaars(Math.random());
    data.push(res);
  }
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearBottts(Math.random());
    data.push(res);
  }
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearGridy(Math.random());
    data.push(res);
  }
  return data;
};
