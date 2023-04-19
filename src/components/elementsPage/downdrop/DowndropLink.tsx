import { useRouter } from 'next/router'
import { FC } from 'react'

const DowndropLink: FC = () => {
	const router = useRouter()
	const handleChange = (value: string)=>{
		router.push(value);
	}
	
	return (
		<div>
			<div className='relative w-40 mt-2'>
				<select className='w-40 text-navColor bg-white border-none outline-none appearance-none focus:border-white text-lg' onChange={event =>handleChange(event.target.value)}>
					<option className='w-20' selected disabled>Биз жонундо</option>
					<option className='w-20' value='/culture'>Маднияты</option>
					<option className='w-20' value='/map'>Дареги</option>
				</select>
			</div>
		</div>
	)
}

export default DowndropLink
