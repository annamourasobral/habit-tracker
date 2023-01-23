import * as Checkbox from '@radix-ui/react-checkbox';

import { Check } from 'phosphor-react';

const availableWeekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

export function NewHabitForm() {
    return (
        <form className='w-full flex flex-col mt-6'>
            <label htmlFor='title' className='font-semibold leading-tight'>
                What is your commitment?
            </label>
            <input
                type='text'
                id='title'
                placeholder='ex.: Workout, Sleep 8h, etc...'
                autoFocus
                className='p-4 rounded-lg mt-3 bg-zinc-800 placeholder:text-zinc-400'
            />

            <label htmlFor='' className='font-semibold leading-tight mt-4'>
                What is the recurrence?
            </label>

            <div className='flex flex-col gap-2 mt-3'>
                {availableWeekDays.map((weekDay) => {
                    return (
                        <Checkbox.Root
                            key={weekDay}
                            className='flex items-center gap-3 group'
                        >
                            <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500  group-data-[state=checked]:border-green-500'>
                                <Checkbox.Indicator>
                                    <Check size={20} className='text-white' />
                                </Checkbox.Indicator>
                            </div>

                            <span className='font-semibold text-xl text-white leading-tight'>
                                {weekDay}
                            </span>
                        </Checkbox.Root>
                    );
                })}
            </div>

            <button
                type='submit'
                className='mt-6 rounded-lg p-4 gap-3 flex items-center font-semibold bg-green-600 justify-center hover:bg-green-500'
            >
                <Check size={20} weight='bold' />
                Confirm
            </button>
        </form>
    );
}
