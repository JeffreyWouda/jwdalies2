import { WorkoutRoutine, ExerciseType } from '../types';

export const WORKOUT_ROUTINE: WorkoutRoutine = {
  name: "Hardloop-specifieke Krachttraining",
  blocks: [
    {
      id: "warming-up",
      title: "Warming-up",
      description: "Zet je zenuwstelsel en spieren 'aan'.",
      type: ExerciseType.STANDARD,
      sets: 1,
      restSeconds: 0,
      exercises: [
        {
          id: "adductor-squeeze",
          name: "Adductor Squeeze met bal",
          reps: "3 x 15 seconden vasthouden",
          instructions: "Ga op je rug liggen met gebogen knieën. Plaats een zachte bal of opgerolde handdoek tussen je knieën. \n\n• Knijp de bal met ongeveer 50-70% van je maximale kracht samen.\n• Focus op het voelen van de spanning in je liezen zonder dat het pijn doet.\n• Let op: Houd de druk constant en blijf rustig doorademen (niet je adem inhouden!)."
        },
        {
          id: "deadbugs",
          name: "Deadbugs",
          reps: "2 x 10 per kant",
          instructions: "Liggend op je rug, knieën in 90 graden (tabletop) en armen recht omhoog.\n\n• Druk je onderrug actief in de grond. Dit is essentieel om de druk van je lieskanaal af te halen.\n• Laat langzaam je linkerarm en rechterbeen zakken tot vlak boven de grond.\n• Let op: Als je rug hol trekt, ga je minder diep. Kwaliteit boven kwantiteit.",
          sideDependent: true
        }
      ]
    },
    {
      id: "superset-1",
      title: "Blok 1: Core Stabiliteit & Anti-Rotatie",
      description: "Bootst de krachten van het hardlopen na rondom je bekken.",
      type: ExerciseType.SUPERSET,
      sets: 3,
      switchSeconds: 30,
      restSeconds: 90,
      exercises: [
        {
          id: "pallof-press",
          name: "1A: Pallof Press",
          reps: "12 herhalingen per kant",
          instructions: "Sta zijwaarts t.o.v. de weerstandsband. Houd de band met beide handen tegen je borst.\n\n• Duw de band recht van je af tot je armen gestrekt zijn.\n• Houd dit 2 seconden vast terwijl je weerstand biedt tegen het naar binnen trekken.\n• Let op: Span je billen en core hard aan. Laat je heupen niet draaien.",
          sideDependent: true
        },
        {
          id: "banded-psoas-march",
          name: "1B: Banded Psoas March",
          reps: "10 herhalingen per been",
          instructions: "Plaats een miniband om je voeten. Sta rechtop (of lig op je rug bij instabiliteit).\n\n• Trek één knie krachtig omhoog tot 90 graden terwijl de andere voet stevig op de grond blijft.\n• Laat je been in 3 seconden gecontroleerd zakken.\n• Let op: Houd je bekken perfect waterpas. Dit traint de diepe heupbuiger zonder de lies te overbelasten.",
          sideDependent: true
        }
      ]
    },
    {
      id: "superset-2",
      title: "Blok 2: Lieskracht & Achterketen",
      description: "Combineert stabiliteit van hamstrings/billen met pure kracht van adductoren.",
      type: ExerciseType.SUPERSET,
      sets: 3,
      switchSeconds: 30,
      restSeconds: 90,
      exercises: [
        {
          id: "copenhagen-plank",
          name: "2A: Copenhagen Adductor Plank",
          reps: "20-30 sec per kant",
          instructions: "Zijwaartse plank met je bovenste been op een bankje, je onderste been is los onder het bankje.\n\n• Duw je heupen hoog zodat je lichaam een rechte lijn vormt.\n• Is dit te zwaar? Plaats je knie op het bankje i.p.v. je voet om de hefboom te verkorten.\n• Let op: Voel je een scherpe trek in je schaambeen? Stop direct en verkort de hefboom.",
          sideDependent: true
        },
        {
          id: "single-leg-rdl",
          name: "2B: Single Leg RDL",
          reps: "10 herhalingen per been",
          instructions: "Houd een gewicht in de hand tegenovergesteld aan je standbeen.\n\n• Buig vanuit je heup naar voren terwijl je achterste been gestrekt mee naar boven gaat.\n• Houd je rug recht en je heupen 'vierkant' naar de grond gericht.\n• Let op: Zorg dat je knie niet naar binnen zakt; dit geeft extra stress op de lies.",
          sideDependent: true
        }
      ]
    },
    {
      id: "superset-3",
      title: "Blok 3: Pure Beenkracht & Excentrische Controle",
      description: "Zwaarste blok voor de liezen. Rekt de lies onder spanning op.",
      type: ExerciseType.SUPERSET,
      sets: 3,
      switchSeconds: 30,
      restSeconds: 90,
      exercises: [
        {
          id: "bulgarian-split-squat",
          name: "3A: Bulgarian Split Squats",
          reps: "8-10 herhalingen per been",
          instructions: "Eén voet op een bankje achter je. \n\n• Zak langzaam naar beneden tot je achterste knie bijna de grond raakt.\n• Houd je romp licht voorovergebogen om de focus op je bilspier te leggen.\n• Let op: Focus op stabiliteit in je knie en enkel. Geen zijwaartse wiebelingen.",
          sideDependent: true
        },
        {
          id: "lateral-lunge-slider",
          name: "3B: Lateral Lunge met Slider",
          reps: "8 herhalingen per been",
          instructions: "Sta met één voet op een slider (of dweil). \n\n• Glijd zijwaarts weg met het slider-been terwijl je door je andere been zakt.\n• Trek jezelf vervolgens krachtig terug naar de startpositie met de kracht van je binnenzijde bovenbeen.\n• Let op: Ga in het begin niet te diep. De lies moet langzaam wennen aan de rek onder spanning.",
          sideDependent: true
        }
      ]
    },
    {
      id: "superset-4",
      title: "Blok 4: Hardloop Impact & Dynamische Stabiliteit",
      description: "Finisher. Traint veerkracht van pezen en rompstabiliteit.",
      type: ExerciseType.SUPERSET,
      sets: 3,
      switchSeconds: 30,
      restSeconds: 60,
      exercises: [
        {
          id: "pogo-jumps",
          name: "4A: Pogo Jumps",
          reps: "30 jumps",
          instructions: "Spring op de bal van je voeten, met minimale buiging in de knieën.\n\n• Spring kort en krachtig. Je bent als een stijve veer.\n• Let op: Als dit een trekkend gevoel geeft in de onderbuik of lies, vervang dit dan door rustige kuit-raises.",
        },
        {
          id: "suitcase-carry",
          name: "4B: Suitcase Carry",
          reps: "40 meter per kant",
          instructions: "Houd een zwaar gewicht in één hand alsof je een koffer draagt.\n\n• Loop langzaam en beheerst. Je lichaam mag niet opzij hellen.\n• Let op: Dit traint je 'anti-lateral flexion', wat cruciaal is om de druk op je schaambeen tijdens het hardlopen te stabiliseren.",
          sideDependent: true
        }
      ]
    }
  ]
};
