import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

// Taken from https://docs.astro.build/en/recipes/reading-time/
export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);

    const readingTime = getReadingTime(textOnPage);

    let readingTimeMinutesCalculated = Math.ceil(readingTime.minutes);
    let readingTimeToText = "";
    if(readingTimeMinutesCalculated == 1)
      readingTimeToText = readingTimeMinutesCalculated + " minuto de lectura";
    else
      readingTimeToText = readingTimeMinutesCalculated + " minutos de lectura";

    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTimeToText;
  };
}
