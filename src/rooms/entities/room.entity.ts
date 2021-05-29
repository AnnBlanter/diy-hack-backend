class Coordinates {
  /**
   * left top x
   * @example 0
   */
  lx: number;

  /**
   * left top y
   * @example 0
   */
  ly: number;

  /**
   * right bottom x
   * @example 10
   */
  rx: number;

  /**
   * right bottom y
   * @example 10
   */
  ry: number;
}

export class Room {
  /**
   * Room number
   * @example 2078
   */
  id: string;

  /**
   * name
   * @example Ленинград
   */
  name: string;

  /**
   * @example 2
   */
  floor: number;

  /**
   * @example 10
   */
  capacity: number;

  hasConference: boolean;

  coordinates: Coordinates;

  type: string;
}
