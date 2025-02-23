import Button from "./common/Button"

const TestResultItem = ({data, user}) => {
  
  return (
    <li className="flex flex-col rounded-2xl bg-[darkgray] p-4 break-all gap-2">
      <div className="header-wrapper">
        <div className="user-area flex items-center gap-2 justify-between">
          <div className="left-side flex gap-4 items-center">
            <div className="user-profile w-[50px] h-[50px] bg-black rounded-full overflow-hidden">
              {
                data?.avatar && <img src={data?.avatar} alt="프로필 사진" />
              }
            </div>
            <span>{data.nickname}</span>
          </div>
          <div className="right-side">
            <span>{data.createdAt}</span>
          </div>
        </div>
      </div>
      <div className="body-wrapper">
        <p className="keep-all">{data.description}</p>
      </div>
      {
        user.id === data.userId &&
        <div className="footer-wrapper flex justify-end">
          <div className="actions-wrapper flex gap-2">
            <Button>비공개로 전환</Button>
            <Button variant="danger">삭제</Button>
          </div>
        </div>
      }
    </li>
  )
}

export default TestResultItem