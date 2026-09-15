import type { Insight } from '../types';
const photos = [
 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80',
 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80'];
const base = [
 ['매출','매출이 높은 매장은 무엇이 다를까?','숫자보다 먼저 살펴봐야 할 잘되는 매장의 운영 원칙을 정리합니다.'],
 ['원가','음식점 원가율, 어디까지 관리해야 할까?','목표 원가율보다 중요한 메뉴별 수익 구조와 관리 기준을 알아봅니다.'],
 ['상권분석','좋은 상권보다 중요한 것은 무엇일까?','유동 인구만으로 설명되지 않는 우리 매장과 상권의 적합성을 살펴봅니다.'],
 ['메뉴','메뉴가 많다고 매출이 올라갈까?','고객의 선택을 돕고 주방의 효율을 높이는 메뉴 구성법을 소개합니다.'],
 ['고객관리','단골 고객을 만드는 작은 차이','재방문은 우연이 아닙니다. 기억에 남는 경험을 만드는 접점을 점검합니다.'],
 ['트렌드','2026 외식업 트렌드 읽기','유행을 좇기보다 내 매장에 필요한 변화를 구별하는 기준을 제안합니다.'],
 ['창업','첫 매장을 준비할 때 놓치기 쉬운 것','예산표 밖에서 발생하는 현실적인 변수와 준비 순서를 짚습니다.'],
 ['운영','바쁜데 남는 것이 없는 이유','매출과 이익 사이, 운영 흐름에서 새는 비용을 찾아봅니다.'],
];
export const insights: Insight[] = base.map((x,i)=>({slug:`insight-${i+1}`,category:x[0],title:x[1],excerpt:x[2],date:`2026. 0${(i%6)+1}. ${12+i}`,readTime:`${5+i%3}분`,image:photos[i%photos.length],content:[
 '매장을 운영하다 보면 눈앞의 문제를 해결하느라 정작 중요한 흐름을 놓치기 쉽습니다. 이번 글에서는 현장에서 반복해서 확인한 기준을 바탕으로 문제를 차근차근 살펴봅니다.',
 '좋은 판단은 감이 아니라 관찰에서 시작합니다. 매출, 고객 반응, 주문 흐름을 같은 기간으로 나누어 기록하면 지금까지 보이지 않던 패턴이 드러납니다.',
 '한 번에 모든 것을 바꾸기보다 가장 영향이 큰 한 가지를 정하고 2주 동안 실행해 보세요. 실행 전후의 숫자와 고객 반응을 비교하면 우리 매장만의 답을 찾을 수 있습니다.',
 '결국 중요한 것은 지속 가능한 운영입니다. 오늘의 작은 기록이 다음 달의 더 나은 의사결정을 만듭니다.'
]}));
export const categories=['전체','상권분석','창업','매출','메뉴','원가','마케팅','고객관리','운영','트렌드'];
