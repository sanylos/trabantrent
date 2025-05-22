'use client';

import { useState } from 'react';

type Day = {
    date: number;
    month: number;
    year: number;
    isCurrentMonth: boolean;
    isAvailable?: boolean;
};

export function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());

    // Generate calendar days
    const getDaysInMonth = (month: number, year: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month: number, year: number) => {
        return new Date(year, month, 1).getDay();
    };

    // Mock availability data - in real app this would come from an API
    const checkAvailability = (date: Date) => {
        // Mock some random availability
        return Math.random() > 0.3;
    };

    const generateCalendarDays = (): Day[] => {
        const days: Day[] = [];
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();

        const daysInMonth = getDaysInMonth(month, year);
        const firstDayOfMonth = getFirstDayOfMonth(month, year);

        // Previous month days
        const daysInPreviousMonth = getDaysInMonth(month - 1, year);
        for (let i = firstDayOfMonth - 1; i >= 0; i--) {
            days.push({
                date: daysInPreviousMonth - i,
                month: month - 1,
                year,
                isCurrentMonth: false
            });
        }

        // Current month days
        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(year, month, i);
            days.push({
                date: i,
                month,
                year,
                isCurrentMonth: true,
                isAvailable: checkAvailability(date)
            });
        }

        // Next month days
        const remainingDays = 42 - days.length; // 6 rows × 7 days = 42
        for (let i = 1; i <= remainingDays; i++) {
            days.push({
                date: i,
                month: month + 1,
                year,
                isCurrentMonth: false
            });
        }

        return days;
    };

    const days = generateCalendarDays();
    const months = [
        'Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen',
        'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'
    ];

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    const previousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };    return (
        <div className="rounded-lg overflow-hidden bg-white shadow-xl">
            {/* Calendar Header */}
            <div className="p-4 bg-[#2C1810] text-white">
                <div className="flex items-center justify-between gap-4">
                    <button
                        onClick={previousMonth}
                        aria-label="Předchozí měsíc"
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <h3 className="text-xl font-bold tracking-tight text-white flex-1 text-center">
                        {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h3>
                    <button
                        onClick={nextMonth}
                        aria-label="Další měsíc"
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Days grid */}
            <div className="p-4 bg-white">
                {/* Week days header */}
                <div className="grid grid-cols-7 mb-4">
                    {['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'].map((day) => (
                        <div key={day} className="text-center text-sm font-semibold text-[#4A2F24]">
                            {day}
                        </div>
                    ))}
                </div>                {/* Days */}
                <div className="grid grid-cols-7 gap-2">
                    {days.map((day, index) => (
                        <div
                            key={index}
                            className={`aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 ${
                                day.isCurrentMonth
                                    ? day.isAvailable
                                        ? 'bg-[#8B4513]/10 text-[#2C1810] cursor-pointer hover:bg-[#8B4513]/20 hover:scale-105 hover:font-bold'
                                        : 'bg-red-100 text-red-600 cursor-not-allowed'
                                    : 'bg-white/80 text-[#4A2F24]/40'
                            }`}
                        >
                            {day.date}
                        </div>
                    ))}
                </div>
            </div>

            {/* Legend */}
            <div className="px-4 py-3 flex items-center gap-4 text-sm text-[#4A2F24] border-t border-[#8B4513]/10 bg-[#FAF3E8]/50">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#8B4513]/10"></div>
                    <span>Dostupné</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-red-100"></div>
                    <span>Obsazené</span>
                </div>
            </div>
        </div>
    );
}
