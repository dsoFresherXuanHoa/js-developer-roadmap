interface Point {
  x: number;
  y: number;
}

const optionalPoint: Partial<Point> = {};
const requiredPoint: Required<Point> = { x: 1, y: 2 };
const recordPoint: Record<string, string> = { x: "1", y: "2" };
const omitPoint: Omit<Point, "x"> = { y: 1 };
const pickPoint: Pick<Point, "x"> = { x: 1 };
