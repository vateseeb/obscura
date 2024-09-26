export interface Topic {
    id: string;
    title: string;
    startDate: Date;
    endDate: Date;
}

export const topics: Topic[] = [
    { id: "1", startDate: new Date('2024-09-23'), endDate: new Date('2024-09-29'), title: 'Texturen' },
    { id: "2", startDate: new Date('2024-09-30'), endDate: new Date('2024-10-06'), title: 'Symmetrie' },
    { id: "3", startDate: new Date('2024-10-07'), endDate: new Date('2024-10-13'), title: 'Wetter' },
    { id: "4", startDate: new Date('2024-10-14'), endDate: new Date('2024-10-20'), title: 'Perspektive' },
    { id: "5", startDate: new Date('2024-10-21'), endDate: new Date('2024-10-27'), title: 'Unschärfe' },
    { id: "6", startDate: new Date('2024-10-28'), endDate: new Date('2024-11-03'), title: 'Muster' },
    { id: "7", startDate: new Date('2024-11-04'), endDate: new Date('2024-11-10'), title: 'Feuer' },
    { id: "8", startDate: new Date('2024-11-11'), endDate: new Date('2024-11-17'), title: 'Ruine' },
    { id: "9", startDate: new Date('2024-11-18'), endDate: new Date('2024-11-24'), title: 'Lebensmittel' },
    { id: "10", startDate: new Date('2024-11-25'), endDate: new Date('2024-12-01'), title: 'Bahnhof' },
    { id: "11", startDate: new Date('2024-12-02'), endDate: new Date('2024-12-08'), title: 'Langzeitbelichtung' },
    { id: "12", startDate: new Date('2024-12-09'), endDate: new Date('2024-12-15'), title: 'Bokeh' },
    { id: "13", startDate: new Date('2024-12-16'), endDate: new Date('2024-12-22'), title: 'Technische Geräte' },
    { id: "14", startDate: new Date('2024-12-23'), endDate: new Date('2024-12-29'), title: 'Spuren' },
    { id: "15", startDate: new Date('2024-12-30'), endDate: new Date('2025-01-05'), title: 'Fenster' },
    { id: "16", startDate: new Date('2025-01-06'), endDate: new Date('2025-01-12'), title: 'Spiegel' },
    { id: "17", startDate: new Date('2025-01-13'), endDate: new Date('2025-01-19'), title: 'Bewegung einfrieren' },
    { id: "18", startDate: new Date('2025-01-20'), endDate: new Date('2025-01-26'), title: 'Augen' },
    { id: "19", startDate: new Date('2025-01-27'), endDate: new Date('2025-02-02'), title: 'Close-Up von Alltagsgegenständen' },
    { id: "20", startDate: new Date('2025-02-03'), endDate: new Date('2025-02-09'), title: 'Fremde' },
    { id: "21", startDate: new Date('2025-02-10'), endDate: new Date('2025-02-16'), title: 'Natur' },
    { id: "22", startDate: new Date('2025-02-17'), endDate: new Date('2025-02-23'), title: 'Formen' },
    { id: "23", startDate: new Date('2025-02-24'), endDate: new Date('2025-03-02'), title: 'Porträt' },
    { id: "24", startDate: new Date('2025-03-03'), endDate: new Date('2025-03-09'), title: 'Rauch und Nebel' },
    { id: "25", startDate: new Date('2025-03-10'), endDate: new Date('2025-03-16'), title: 'Abstrakt' },
    { id: "26", startDate: new Date('2025-03-17'), endDate: new Date('2025-03-23'), title: 'Komplementärfarben' },
    { id: "27", startDate: new Date('2025-03-24'), endDate: new Date('2025-03-30'), title: 'Lichtmalerei' },
    { id: "28", startDate: new Date('2025-03-31'), endDate: new Date('2025-04-06'), title: 'Ungewöhnliche Perspektive' },
    { id: "29", startDate: new Date('2025-04-07'), endDate: new Date('2025-04-13'), title: 'Kontraste' },
    { id: "30", startDate: new Date('2025-04-14'), endDate: new Date('2025-04-20'), title: 'Symmetrie in der Natur' },
    { id: "31", startDate: new Date('2025-04-21'), endDate: new Date('2025-04-27'), title: 'Religiöse Gebäude' },
    { id: "32", startDate: new Date('2025-04-28'), endDate: new Date('2025-05-04'), title: 'Gegenlicht' },
    { id: "33", startDate: new Date('2025-05-05'), endDate: new Date('2025-05-11'), title: 'Nachahmen eines berühmten Fotos' },
];

export const getTopic = (date: Date): Topic | null => {
    const topic = topics.find(topic => {
        return date >= topic.startDate && date <= topic.endDate;
    });
    return topic || null;
};  



