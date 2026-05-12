export enum ExerciseType {
  STANDARD = 'standard',
  SUPERSET = 'superset'
}

export interface Exercise {
  id: string;
  name: string;
  reps: string;
  instructions: string;
  sideDependent?: boolean;
}

export interface WorkoutBlock {
  id: string;
  title: string;
  description: string;
  type: ExerciseType;
  exercises: Exercise[];
  sets: number;
  restSeconds: number;
  switchSeconds?: number;
}

export interface WorkoutRoutine {
  name: string;
  blocks: WorkoutBlock[];
}
