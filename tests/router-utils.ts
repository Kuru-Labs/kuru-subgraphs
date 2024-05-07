import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  Initialized,
  MarketRegistered,
  MarketUpdated,
  OwnershipTransferred
} from "../generated/Router/Router"

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createMarketRegisteredEvent(
  baseAsset: Address,
  quoteAsset: Address,
  market: Address
): MarketRegistered {
  let marketRegisteredEvent = changetype<MarketRegistered>(newMockEvent())

  marketRegisteredEvent.parameters = new Array()

  marketRegisteredEvent.parameters.push(
    new ethereum.EventParam("baseAsset", ethereum.Value.fromAddress(baseAsset))
  )
  marketRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "quoteAsset",
      ethereum.Value.fromAddress(quoteAsset)
    )
  )
  marketRegisteredEvent.parameters.push(
    new ethereum.EventParam("market", ethereum.Value.fromAddress(market))
  )

  return marketRegisteredEvent
}

export function createMarketUpdatedEvent(
  baseAsset: Address,
  quoteAsset: Address,
  market: Address
): MarketUpdated {
  let marketUpdatedEvent = changetype<MarketUpdated>(newMockEvent())

  marketUpdatedEvent.parameters = new Array()

  marketUpdatedEvent.parameters.push(
    new ethereum.EventParam("baseAsset", ethereum.Value.fromAddress(baseAsset))
  )
  marketUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "quoteAsset",
      ethereum.Value.fromAddress(quoteAsset)
    )
  )
  marketUpdatedEvent.parameters.push(
    new ethereum.EventParam("market", ethereum.Value.fromAddress(market))
  )

  return marketUpdatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
