import { useRouter } from 'next/router'
import { FC } from 'react'

const DropdownFooter: FC = () => {
	const router = useRouter()
	const handleChange = (value: string)=>{
		router.push(value);
	}
	
	return (
		<div>
			<div className='relative laptop:w-40 w-32 text-start'>
				<select className='laptop:w-40 w-32 pl-0 pt-0 text-white bg-navColor  border-none outline-none appearance-none focus:border-white text-lg' onChange={event =>handleChange(event.target.value)}>
					<option className='w-20' selected disabled>Биз жонундо</option>
					<option className='w-20' value='/culture'>Маднияты</option>
					<option className='w-20' value='/map'>Дареги</option>
				</select>
			</div>
		</div>
	)
}

export default DropdownFooter
