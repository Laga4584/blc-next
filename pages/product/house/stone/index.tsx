import { deckClip } from 'data/deckClip';
import { fetchSSRModule } from 'modules/front/FetchModule';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
	let queryData = context.query;
	let apiUrl = `${process.env.SERVER_HOST_URL}/api/house`;
	const apiData = await fetchSSRModule(
		context,
		{
			url: apiUrl,
			method: 'GET',
		},
		false,
	);

	if (apiData.isError == true) {
		return apiData.data;
	}
	let props: any = apiData.data;
	if (typeof apiData.metaInfo != 'undefined') {
		props.metaInfo = apiData.metaInfo;
	}
	return {
		props,
	};
};

export default function House(props: any) {
	return (
		<section className="house-section">
			<div className="title-area">
				<p className="title">주춧돌</p>
			</div>
			<div className="text-center mt-2">
				목조 주택 건축用 앵커를 연구개발하여 건축현장에서 필요한 건축물 수명과
				안전을 위한 제품들을 생산합니다.
			</div>
			<div
				className="image"
				style={{
					backgroundImage: `url(${props.intro[1].url})`,
				}}
			></div>
			{/* <div className="sub-title">history</div> */}
			{/* <div className="image" style={{
                          backgroundImage: `url(${props.intro[0].url})`,
                        }}></div>
      <p className="text-center">비엘텍크라스노의 데크 제품을 소개합니다.</p>
      <div className="sub-title">데크 소재</div>
      {props.materials.map((materialItem:any, materialIndex:number)=>{
        return <div className="image-area" key={`material-image-${materialIndex}`} style={{
          backgroundImage: `url(${materialItem.url})`,
        }}></div>
      })}
      <div className="sub-title">연결 클립</div>
      <div className="info-area">
        {props.products.map((item:any, index:number) => {
          return (
            <div className="item" key={`product-${index}`}>
              <p className="item-title">{item.name}</p>
              <div className="item-image-area">
                <div className="item-image-col">
                {item.images.products.map((productImage:any, imageIndex:number) => {
                  return (
                      <div
                        className="item-image"
                        style={{
                          backgroundImage: `url(${productImage.url})`,
                        }}
                        key={`deck-item-product-image-${imageIndex}`}
                      ></div>
                  );
                })}
                </div>
                <div className="item-image-col">
                {item.images.drafts.map((productImage:any, imageIndex:number) => {
                  return (
                      <div
                        className="item-image"
                        style={{
                          backgroundImage: `url(${productImage.url})`,
                        }}
                        key={`deck-item-draft-image-${imageIndex}`}
                      ></div>
                  );
                })}
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>품명</th>
                    <th>사용높이</th>
                    <th>재료두께</th>
                    <th>재료명</th>
                  </tr>
                </thead>
                <tbody>
                  {item.productInfos.map((infoItem:any, infoIndex:number) => {
                    return (
                      <tr key={infoIndex}>
                        <td>{infoItem.name}</td>
                        <td>{infoItem.height}</td>
                        <td>{infoItem.thickness}</td>
                        <td>{infoItem.material}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </div> */}
		</section>
	);
}
