import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import ui from "ui";

dayjs.extend(duration);

const App = () => {
  let dateDiv = ui.div();

  setInterval(() => {
    const now = dayjs();
    const newYear = dayjs("2025-01-01");
    const diff = dayjs.duration(newYear.diff(now));

    dateDiv.setChildren([
      ui.h2("Time until New Year 🎉🎉🎉"),
      ui.p(
        `${diff.days()} days ${diff.hours()} hours ${diff.minutes()} minutes ${diff.seconds()} seconds`,
      ),
    ]);
  });

  return ui.div([
    ui.h1("Other App"),
    ui.p("Welcome to my other app!"),
    dateDiv,
  ]);
};

document.querySelector("#root").appendChild(App().render());
