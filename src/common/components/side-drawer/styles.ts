import styled from 'styled-components';



export const Overlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    inset: 0;
    background: ${({ theme }) => theme.colors.blackDark};
    opacity: ${({ isOpen }) => (isOpen ? 0.4 : 0)};
    pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
    transition: opacity 0.3s ease;
    z-index: 999;
    backdrop-filter: blur(4px);
`;

export const Drawer = styled.div<{
    isOpen: boolean;
    width?: string;
    height?: string;
    position: 'left' | 'right';
}>`
    position: fixed;
    top: 0;
    ${({ position }) => position}: 0;
    height: ${({ height }) => height || '100%'};
    width: '100%';
    background: ${({ theme }) => theme.colors.blackDark};
    box-shadow: ${({ position }) =>
    position === 'right' ? '-2px 0 8px rgba(0, 0, 0, 0.1)' : '2px 0 8px rgba(0, 0, 0, 0.1)'};
    z-index: 1000;
    display: flex;
    flex-direction: column;
    transform: translateX(
            ${({ isOpen, position }) => {
    if (isOpen) return '0';
    return position === 'right' ? '100%' : '-100%';
  }}
    );
    transition: transform 0.3s ease;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-top-right-radius: ${({ theme }) => theme.borderRadius.lg};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.lg};

    @media ${({ theme }) => theme.mediaQuery.laptop} {
        width: ${({ width }) => width || '320px'};
    }
`;

export const Header = styled.div`
    padding: 1rem;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CloseIcon = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`;

export const Content = styled.div`
    padding: 1rem;
    flex: 1;
    overflow-y: auto;
`;


