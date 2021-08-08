export interface SidebarItems {
    about: "ABOUT";
    profile: "PROFILE";
    settings: "SETTINGS";
    exams: "EXAMS";
}

export interface ExamsItems {
    exams: [{ name: "Informatika"; path: "" }, { name: "Matematika"; path: "" }, { name: "Fizika"; path: "" }];
}

export interface PreExamsItems {
    values: { firstname: string; surname: string; email: string };
    examName: string;
    time: string;
    state: string;
    timer: { hours: number; minutes: number; seconds: number };
}

export interface QuestionsItems {
    id: number;
    categorys: [{ category: string; questions: [{ question: string }] }];
}
