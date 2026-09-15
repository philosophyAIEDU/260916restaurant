import { Link } from 'react-router-dom';import { SEO } from '../components/SEO';
export default function NotFound(){return <div className="not-found"><SEO title="페이지를 찾을 수 없습니다"/><span>404</span><h1>찾으시는 페이지가 없습니다.</h1><p>주소가 바뀌었거나 삭제된 페이지일 수 있습니다.</p><Link className="btn" to="/">홈으로 돌아가기</Link></div>}
