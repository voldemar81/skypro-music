// export const standingRedact = (standing_seconds) => {
//     const standingMinutes = Math.floor(standing_seconds / 60);
//     const standingSeconds = String(standing_seconds % 60).padStart(2, '0');
//   return  `${standingMinutes}:${standingSeconds}`;
// };

export const durationFormatter = (duration_in_seconds) => {
  const durationMinutes = Math.floor(duration_in_seconds / 60);
  const durationSeconds = String(duration_in_seconds % 60).padStart(2, '0');
return  `${durationMinutes}:${durationSeconds}`;
};