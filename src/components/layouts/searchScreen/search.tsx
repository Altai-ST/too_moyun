import { AppDispatch, RootState } from '@/GlobalRedux/store'
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Search: FC = () => {


	// const dispatch = useDispatch<AppDispatch>()

	// const findContent = useSelector((state: RootState) => state.search)

	// const [page, setPage] = useState({
	// 	page: 1,
	// 	pageSize: 3,
	// })

	// const [pageCur, setPageCur] = useState({
	// 	page: 1,
	// 	pageSize: 3,
	// })

	// const pages = [
	// 	{ num: page.page },
	// 	{ num: page.page + 1 },
	// 	{ num: page.page + 2 },
	// 	{ num: page.page + 3 },
	// ]

	// function Next() {
	// 	setPage({ ...page, page: ++page.page })
	// }
	// function back() {
	// 	page.page > 1 && setPage({ ...page, page: --page.page })
	// }

	// useEffect(() => {
	// 	if (findContent.errorMalymattar) {
	// 		setPageCur({ ...page, page: 1 })
	// 		dispatch(setNotErrorMalymattar(false))
	// 	}
	// }, [cardNews])

	// useEffect(() => {
	// 	dispatch(getMalymattar(pageCur))
	// }, [pageCur.page])


	return <div>
		
	</div>
}

export default Search