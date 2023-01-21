import * as Progress from '@radix-ui/react-progress';

interface ProgressBarprops {
    progress: number;
}

export function ProgressBar(props: ProgressBarprops) {
    return (
        <Progress.Root className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
            <Progress.Indicator
                role='progressbar'
                aria-label='Habits completed today progress'
                aria-valuenow={props.progress}
                className='h-3 rounded-xl bg-violet-600'
                style={{ width: `${props.progress}%` }}
            ></Progress.Indicator>
        </Progress.Root>
    );
}
