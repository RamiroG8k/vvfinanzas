import { ReactNode, Suspense } from 'react';

const ResultsLayout = ({ children }: { children: ReactNode }) => (
    <Suspense fallback={<p>Cargando...</p>}>
        {children}
    </Suspense>
);

export default ResultsLayout;
