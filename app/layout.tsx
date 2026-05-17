import './globals.css';
import { TopNav } from '@/components/ui';

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang='id'><body><TopNav/><main className='max-w-7xl mx-auto p-4'>{children}</main></body></html>;
}
