class DateUtils {
    public getDayLetters(date: Date, n: number = 3): string {
        return date.toLocaleDateString(undefined, {
            weekday: 'long'
        }).substr(0, n).toLocaleUpperCase();
    }

    public getMonthNumberByName(monthName: string): number {
        return this.getMonthsNames().indexOf(monthName);
    }

    public getMonthNameByNumber(n: any): string {
        return new Date(0, n, 1).toLocaleString(undefined, {
            month: 'long'
        });
    }

    public getMonthsNames(): string[] {
        //@ts-ignore ts doesn't know nothing
        return [...Array(12).keys()]
            .map(i => this.getMonthNameByNumber(i));
    }

    /**
     * 
     * @param date current date to change
     * @param n number of month
     * @returns 
     */
    public changeMonth(date: Date, n: number): Date {
        return new Date(date.getFullYear(),n, date.getDate());
    }
}

export default new DateUtils()