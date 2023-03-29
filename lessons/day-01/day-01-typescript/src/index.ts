import { Submission } from "./types";

const submissions: Submission[] = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true,
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        date: '2020-04-22',
        passed: true
    }
];

const addSubmission = (submissions: Submission[], newName: string, newScore: number, newDate: string) => {
    let passed = newScore > 60;
    const newSubmission: Submission = {
        name: newName,
        date: newDate,
        passed,
        score: newScore
    }
    submissions.push(newSubmission);
};

const deleteSubmissionById = (submissions: Submission[], index: number) => {
    submissions = submissions.splice(index, 1);
}

const findSubmissionByName = (submissions: Submission[], name: string): Submission | undefined => {
    return submissions.find(item => item.name === name)
}

const findLowestScore = (submissions: Submission[]): Submission | undefined => {
    return submissions.reduce((prev, cur) => prev.score < cur.score ? prev : cur);
}

const findAverageScore = (submisisons: Submission[]): number => {
    return submissions.reduce((total, cur) => total += cur.score, 0) / submissions.length
}

const filterPassing = (submissions: Submission[]): Submission[] => {
    return submissions.filter(item => item.passed)
}
