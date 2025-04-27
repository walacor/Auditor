import styled from "styled-components";
import { Colors } from "../../config";

// export const SidebarContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100dvh;
//   padding: 2rem 2rem 1rem 0.5rem;
// `;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100dvh; /* Full viewport height */
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px; /* Reduce padding for smaller screens */
  }
`;

export const TabSelector = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack tabs vertically on smaller screens */
    align-items: center;
    gap: 10px;
  }
`;

export const TabButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-bottom: ${({ active }) => (active ? "2px solid #2e5aac" : "none")};
  background-color: ${({ active }) => (active ? "#f0f0f0" : "transparent")};
  color: ${({ active }) => (active ? "#2e5aac" : "#333")};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width for smaller screens */
    text-align: center;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto; /* Enable horizontal scrolling for smaller screens */
  margin-top: 20px;

  table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    th,
    td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid #ddd;
      word-wrap: break-word; /* Ensure long text wraps */
    }

    th {
      background-color: ${Colors.BLUE_PRIMARY};
      color: #fff;
      font-weight: bold;
    }

    tr:nth-child(even) {
      background-color: #f9f9f9;
    }
  }

  @media (max-width: 768px) {
    table {
      font-size: 0.9rem; /* Reduce font size for smaller screens */
    }

    th,
    td {
      padding: 8px 12px; /* Reduce padding for smaller screens */
    }
  }

  @media (max-width: 480px) {
    table {
      font-size: 0.8rem; /* Further reduce font size for very small screens */
    }

    th,
    td {
      padding: 6px 8px; /* Further reduce padding */
    }
  }
`;
