import { describe, expect, it } from 'vitest';
import { HeaderProps, HomepageSection } from './HomepageSection';
import { render } from '@testing-library/react';

describe('HomepageSection', () => {
  const HEADER_PROPS_MOCK: HeaderProps = {
    title: 'mockTitle',
    subtitle: 'mockSubtitle',
    eyebrow: 'mockEyebrow',
  };

  const renderHomepageSectionMock = () =>
    render(
      <HomepageSection>
        <HomepageSection.Header
          title={HEADER_PROPS_MOCK.title}
          subtitle={HEADER_PROPS_MOCK.subtitle}
          eyebrow={HEADER_PROPS_MOCK.eyebrow}
        />
        <HomepageSection.Content>
          <div>Content</div>
        </HomepageSection.Content>
      </HomepageSection>,
    );

  it('renders component correctly', () => {
    const { getByTestId } = renderHomepageSectionMock();
    expect(getByTestId('homepage-section')).toBeInTheDocument();
  });

  it('renders Header with correct props', () => {
    const { getByRole, getByText } = renderHomepageSectionMock();
    expect(getByRole('heading', { name: HEADER_PROPS_MOCK.eyebrow })).toBeInTheDocument();
    expect(getByRole('heading', { name: HEADER_PROPS_MOCK.title })).toBeInTheDocument();
    expect(getByText(HEADER_PROPS_MOCK.subtitle)).toBeInTheDocument();
  });

  it('renders Content correctly with correct props', () => {
    const { getByText } = renderHomepageSectionMock();
    expect(getByText('Content')).toBeInTheDocument();
  });
});
