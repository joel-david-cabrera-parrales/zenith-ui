import type { RepoInfo } from '../components';

export type ShowcaseFilter = 'all' | 'production' | 'staging' | 'archived';
export type ShowcaseView = 'grid' | 'list';

export const SHOWCASE_REPOS: Array<RepoInfo & { icon: string }> = [
  {
    name: 'zenith-ingress-router',
    branch: 'git: main (v2.8.1)',
    status: 'live',
    description:
      'Core Envoy-backed API gateway managing edge SSL termination, circuit breakers, and rate limiting rules.',
    language: 'TypeScript',
    languageColor: 'bg-blue-600',
    updated: 'Updated 2h ago',
    icon: 'terminal',
  },
  {
    name: 'telemetry-aggregator-daemon',
    branch: 'git: release/3.0',
    status: 'live',
    description:
      'High throughput daemon compiling kernel counters and Prometheus metrics into binary delta packages.',
    language: 'Rust',
    languageColor: 'bg-rose-600',
    updated: 'Updated 5h ago',
    icon: 'memory',
  },
  {
    name: 'vault-kms-connector',
    branch: 'git: main (v1.1.0)',
    status: 'live',
    description:
      'Asynchronous certificate authority rotation hook interfacing HashiCorp Vault with AWS KMS.',
    language: 'Go',
    languageColor: 'bg-emerald-600',
    updated: 'Updated 1d ago',
    icon: 'security',
  },
  {
    name: 'proto-schemas-registry',
    branch: 'git: develop',
    status: 'staging',
    description:
      'Universal Protobuf and gRPC interface specifications defining inter-service payload contracts.',
    language: 'Protocol Buffers',
    languageColor: 'bg-blue-600',
    updated: 'Updated 3d ago',
    icon: 'data_object',
  },
  {
    name: 'zenith-ui-primitives',
    branch: 'git: main (v4.2.0)',
    status: 'live',
    description:
      'Official Tailwind component package and token definitions for Zenith Dash admin consoles.',
    language: 'TypeScript / CSS',
    languageColor: 'bg-blue-600',
    updated: 'Updated 12m ago',
    icon: 'view_quilt',
  },
  {
    name: 'event-webhook-dispatcher',
    branch: 'git: main',
    status: 'live',
    description:
      'Reliable delivery broker guaranteeing at-least-once webhook transmissions with exponential backoff.',
    language: 'Go',
    languageColor: 'bg-emerald-600',
    updated: 'Updated 6h ago',
    icon: 'webhook',
  },
];

export function filterRepos(
  repos: typeof SHOWCASE_REPOS,
  filter: ShowcaseFilter,
): typeof SHOWCASE_REPOS {
  if (filter === 'all') return repos;
  if (filter === 'production')
    return repos.filter((repo) => repo.status === 'live');
  if (filter === 'staging')
    return repos.filter((repo) => repo.status === 'staging');
  return repos.filter((repo) => repo.status === 'archived');
}
