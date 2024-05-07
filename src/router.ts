import {
  Initialized as InitializedEvent,
  MarketRegistered as MarketRegisteredEvent,
  MarketUpdated as MarketUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Router/Router"
import {
  Initialized,
  MarketRegistered,
  MarketUpdated,
  OwnershipTransferred
} from "../generated/schema"

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketRegistered(event: MarketRegisteredEvent): void {
  let entity = new MarketRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.baseAsset = event.params.baseAsset
  entity.quoteAsset = event.params.quoteAsset
  entity.market = event.params.market

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketUpdated(event: MarketUpdatedEvent): void {
  let entity = new MarketUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.baseAsset = event.params.baseAsset
  entity.quoteAsset = event.params.quoteAsset
  entity.market = event.params.market

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
