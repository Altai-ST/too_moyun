import CommonInfo from '@/components/screens/commonInfo/CommonInfo'
import { CommonInfoService } from '@/services/commonInfo.service'
import { NextPage } from 'next'

const CommonInfoPage: NextPage = (props) => {
	return <div>
			<CommonInfo commonInfo={props.commonInfo}/>
	</div>
}

export async function getStaticProps() {
  const commonInfo = await CommonInfoService.getCommonInfo();
  return {
    props: {commonInfo},
    revalidate: 10,
  }
}

export default CommonInfoPage