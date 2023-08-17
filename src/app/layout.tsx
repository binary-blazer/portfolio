import '../styles/globals.css';
import '../styles/tippy.css';
import '../styles/nprogress.css';

import StyledComponentsRegistry from './registry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}