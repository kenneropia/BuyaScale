interface PropsOnlyType<T> {
    properties: T;
}

interface ChildrenOnlyProps {
    children: React.ReactNode;
}

interface PropsWithChildrenType<T> extends PropsOnlyType<T> {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

interface LayoutPropsType {
    page: string;
}

interface SEOPropsType {
    title: string;
    description: string;
}

declare module "*.jpg" {
    const path: string;
    export default path;
}

declare module "*.jpeg" {
    const path: string;
    export default path;
}

declare module "*.svg" {
    const path: string;
    export default path;
}

declare module "*.png" {
    const path: string;
    export default path;
}

declare module "*.webmanifest" {
    const path: string;
    export default path;
}