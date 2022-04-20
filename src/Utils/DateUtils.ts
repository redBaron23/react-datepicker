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
        return new Date(date.getFullYear(), n, date.getDate());
    }

    // date to string hours "HH:mm AM/PM"
    public dateToStringHours(date: Date): string {
        return date.toLocaleTimeString(undefined, {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
    }

    //return a date from a Date (year, month, day) and a string HH:mm AM/PM
    public stringToDateHours(date: Date, hours: string): Date {
        const [hour, rest] = hours.split(':');
        const [minutes, ampm] = rest.split(' ');
        return new Date(date.getFullYear(), date.getMonth(), date.getDay(), +hour, +minutes, 0)
    }

    public areSameYearMonthAndDay(date1: Date, date2: Date): boolean {
        return date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate();
    }
}

export default new DateUtils()